export type TUnit = {
  code: string;
  linkUrl: string;
  title: string;
  creditPoints: string;
  note?: string;
};

export type TUnitInfoProps = {
  completionText: string;
  units: TUnit[];
};
