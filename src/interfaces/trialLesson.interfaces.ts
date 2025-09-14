// trialLesson.interfaces.ts

import { StaticImageData } from "next/image";

export interface ITrialLessonCardProps {
  id: number;
  image: StaticImageData;
  title: string;
  price: string;
  oldPrice?: string;
}
