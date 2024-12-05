export interface CalculatorButton {
    label: string;
    value?: string;
    type: 'number' | 'operator' | 'action' | 'decimal';
}