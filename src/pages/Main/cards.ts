import type { Card } from '@/types/types';
import HearthBeat from '@/assets/HeartBeat.svg';
import Stethoscope from '@/assets/Stethoscope.svg';
import MedicalRecord from '@/assets/MedicalRecord.svg';

export const cards: Card[] = [
  { title: 'Онлайн-прием', image: HearthBeat, text: 'Рыба текст' },
  { title: 'Экстренный Случай', image: Stethoscope, text: 'Рыба текст' },
  { title: 'Лечение рака', image: MedicalRecord, text: 'Рыба текст' },
]