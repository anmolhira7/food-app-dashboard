/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CourierCreateFormInputValues = {
    name?: string;
    sub?: string;
    lat?: number;
    lng?: number;
    transportationMode?: string;
};
export declare type CourierCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    sub?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    lng?: ValidationFunction<number>;
    transportationMode?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CourierCreateFormOverridesProps = {
    CourierCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    sub?: FormProps<TextFieldProps>;
    lat?: FormProps<TextFieldProps>;
    lng?: FormProps<TextFieldProps>;
    transportationMode?: FormProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CourierCreateFormProps = React.PropsWithChildren<{
    overrides?: CourierCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CourierCreateFormInputValues) => CourierCreateFormInputValues;
    onSuccess?: (fields: CourierCreateFormInputValues) => void;
    onError?: (fields: CourierCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CourierCreateFormInputValues) => CourierCreateFormInputValues;
    onValidate?: CourierCreateFormValidationValues;
} & React.CSSProperties>;
export default function CourierCreateForm(props: CourierCreateFormProps): React.ReactElement;
