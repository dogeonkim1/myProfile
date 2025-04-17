import { MouseEvent } from "react";

export type DataType = {
  src: string;
  title: string;
  paragraphs: string[];
};

export interface SpecifiedModalProps {
  modalHandler: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}

export interface ModalProps extends SpecifiedModalProps {
  data: DataType[];
  value: string;
}
