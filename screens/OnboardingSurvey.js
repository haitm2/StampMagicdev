import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AdEventType, BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const DEFAULT_STORAGE_KEY = 'onboardingSurvey';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ALL_PURPOSES = [
  'Find stamp value',
  'Identify stamp details',
  'Manage my collection',
  'Buy/Sell or trade',
  'Just exploring',
];

const EXPERIENCE_OPTIONS = [
  'Beginner',
  '1–3 years',
  '3+ years',
  'Professional',
];

const INTEREST_OPTIONS = [
  'Postage stamps',
  'Commemoratives',
  'Limited/rare issues',
  'Topical themes (animals, history, sports…)'
];

const GOAL_OPTIONS = [
  'Quick & accurate valuation',
  'Manage my collection',
  'Compare market prices',
  'Connect with community',
];

const TOTAL_STEPS = 4;

export default function OnboardingSurvey({ onComplete, storageKey = DEFAULT_STORAGE_KEY }) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const [bannerError, setBannerError] = useState(false);

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    purpose: [],
    experience: '',
    interests: [],
    goal: '',
    customCountry: '',
  });

  const percent = useMemo(() => Math.round((step / TOTAL_STEPS) * 100), [step]);

  const toggleMulti = (key, value) => {
    setAnswers(prev => {
      const set = new Set(prev[key]);
      set.has(value) ? set.delete(value) : set.add(value);
      return { ...prev, [key]: Array.from(set) };
    });
  };

  const setSingle = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const canContinue = useMemo(() => {
    switch (step) {
      case 1:
        return answers.purpose.length > 0;
      case 2:
        return !!answers.experience;
      case 3:
        return answers.interests.length > 0;
      case 4:
        return !!answers.goal; // country is optional
      default:
        return true;
    }
  }, [step, answers]);

  const next = () => setStep(s => Math.min(TOTAL_STEPS, s + 1));
  const back = () => setStep(s => Math.max(1, s - 1));

  const submit = async () => {
    try {
      console.log(answers);
      await AsyncStorage.setItem(storageKey, JSON.stringify(answers));
      Alert.alert(
        'Thank you for participating in the survey',
        'We will use this survey to gradually improve the quality of the application.',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.goBack();
            }
          }
        ]
      );
    } catch (e) {
      // no-op
    }
    if (onComplete) onComplete(answers);
  };

  const skipAll = () => {
    // const skipped = { purpose: [], experience: '', interests: [], goal: '', customCountry: '' };
    // try { await AsyncStorage.setItem(storageKey, JSON.stringify(skipped)); } catch { }
    // if (onComplete) onComplete(skipped);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        backgroundColor="#1f0d03"
        barStyle="light-content"
      />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{"Tell us about your stamp journey"}</Text>
        <Pressable onPress={skipAll} accessibilityRole="button" hitSlop={8}>
          <Text style={styles.skip}>✕</Text>
        </Pressable>
      </View>

      {/* Progress */}
      <View style={styles.progressWrap}>
        <View style={[styles.progressBar, { width: `${percent}%` }]} />
        <Text style={styles.progressText}>{percent}%</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {step === 1 && (
          <StepBlock
            question="What will you use the app for?"
            subtitle="Select all that apply"
          >
            <ChipList
              options={ALL_PURPOSES}
              selected={answers.purpose}
              onToggle={(v) => toggleMulti('purpose', v)}
            />
          </StepBlock>
        )}

        {step === 2 && (
          <StepBlock
            question="How experienced are you with stamp collecting?"
            subtitle="Choose one"
          >
            <RadioList
              options={EXPERIENCE_OPTIONS}
              selected={answers.experience}
              onSelect={(v) => setSingle('experience', v)}
            />
          </StepBlock>
        )}

        {step === 3 && (
          <StepBlock
            question="Which types of stamps are you most interested in?"
            subtitle="Select all that apply"
          >
            <ChipList
              options={INTEREST_OPTIONS}
              selected={answers.interests}
              onToggle={(v) => toggleMulti('interests', v)}
            />
          </StepBlock>
        )}

        {step === 4 && (
          <StepBlock
            question="What is your #1 goal right now?"
            subtitle="Choose one"
          >
            <RadioList
              options={GOAL_OPTIONS}
              selected={answers.goal}
              onSelect={(v) => setSingle('goal', v)}
            />
          </StepBlock>
        )}
      </View>

      {/* Footer nav */}
      <View style={styles.footer}>
        <Pressable onPress={back} disabled={step === 1} style={[styles.navBtn, step === 1 && styles.navBtnDisabled]}>
          <Text style={styles.navText}>Back</Text>
        </Pressable>

        {step < TOTAL_STEPS ? (
          <Pressable onPress={next} disabled={!canContinue} style={[styles.cta, !canContinue && styles.ctaDisabled]}>
            <Text style={styles.ctaText}>Next</Text>
          </Pressable>
        ) : (
          <Pressable onPress={submit} disabled={!canContinue} style={[styles.cta, !canContinue && styles.ctaDisabled]}>
            <Text style={styles.ctaText}>Finish</Text>
          </Pressable>
        )}
      </View>
      {bannerError ?
        null :
        <View style={{ width: '100%', alignItems: 'center', paddingBottom: insets.bottom, backgroundColor: '#004D40' }}>
          <BannerAd
            size={BannerAdSize.MEDIUM_RECTANGLE}
            unitId={__DEV__ ? TestIds.BANNER : Platform.select({
              ios: TestIds.BANNER,
              android: 'ca-app-pub-9597010572153445/2830532023',
            })}
            onAdFailedToLoad={(error) => {
              console.log(error);
              setBannerError(true);
            }}
          />
        </View>
      }
    </SafeAreaView>
  );
}

function StepBlock({ question, subtitle, children }) {
  return (
    <View>
      <Text style={styles.question}>{question}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      <View style={{ height: 12 }} />
      {children}
    </View>
  );
}

function ChipList({ options, selected, onToggle }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {options.map(item => (
        <Chip
          key={item}
          label={item}
          selected={selected.includes(item)}
          onPress={() => onToggle(item)}
          multiselect
        />
      ))}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

function RadioList({ options, selected, onSelect }) {
  return (

    <ScrollView showsVerticalScrollIndicator={false}>
      {options.map(item => (
        <Chip
          key={item}
          label={item}
          selected={selected === item}
          onPress={() => onSelect(item)}
        />
      ))}
      <View style={{ height: 100 }} />
    </ScrollView>

    // <FlatList
    //   data={options}
    //   keyExtractor={(item) => item}
    //   renderItem={({ item }) => (
    //     <Chip
    //       label={item}
    //       selected={selected === item}
    //       onPress={() => onSelect(item)}
    //     />
    //   )}
    //   ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    // />
  );
}

function Chip({ label, selected, onPress, multiselect }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      style={[styles.chip, selected && styles.chipSelected]}
    >
      <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
        {label}
        {multiselect && selected ? ' ✓' : ''}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#00241e',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  title: {
    // width: width - 100,
    color: '#F0F4C3',
    fontSize: 20,
    fontWeight: '700',
  },
  skip: {
    // width: 80,
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
  },
  progressWrap: {
    height: 10,
    marginHorizontal: 20,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 999,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#00edc6',
  },
  progressText: {
    textAlign: 'right',
    marginHorizontal: 20,
    marginTop: 6,
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 4,
  },
  question: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginTop: 4,
  },
  label: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderColor: 'rgba(255,255,255,0.18)',
    borderWidth: 1,
    color: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },
  chip: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
    borderColor: 'rgba(255,255,255,0.18)',
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  chipSelected: {
    backgroundColor: 'rgba(141,162,255,0.2)',
    borderColor: '#00edc6',
  },
  chipText: {
    color: '#FFF',
    fontSize: 15,
  },
  chipTextSelected: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#004D40',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32
    // borderTopColor: 'rgba(255,255,255,0.12)',
    // borderTopWidth: StyleSheet.hairlineWidth,
  },
  navBtn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    // backgroundColor: 'rgba(255,255,255,0.06)',
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)'
  },
  navBtnDisabled: {
    // opacity: 0.4,
    backgroundColor: '#444'
  },
  navText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600'
  },
  cta: {
    flex: 1,
    marginLeft: 12,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#00edc6',
  },
  ctaDisabled: {
    // opacity: 0.5,
    backgroundColor: '#546E7A'
  },
  ctaText: {
    color: '#0B1020',
    fontSize: 16,
    fontWeight: '800',
  },
});
