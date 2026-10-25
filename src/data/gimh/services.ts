export type GIMHService = { id: string; name: string; confirmed: boolean; description: string };
export const GIMH_SERVICES: GIMHService[] = [
  { id: 'ect', name: 'Electroconvulsive Therapy (ECT)', confirmed: true, description: 'Plain-language explanation pending hospital review.' },
  { id: 'rtms', name: 'Repetitive Transcranial Magnetic Stimulation (rTMS)', confirmed: true, description: 'Plain-language explanation pending hospital review.' },
  { id: 'ketamine', name: 'Ketamine infusion', confirmed: true, description: 'Plain-language explanation pending hospital review.' },
  { id: 'counselling', name: 'Counselling / Psychotherapy', confirmed: true, description: 'Plain-language explanation pending hospital review.' },
  { id: 'adult-psychiatry', name: 'General Adult Psychiatry', confirmed: true, description: 'Plain-language explanation pending hospital review.' },
];
