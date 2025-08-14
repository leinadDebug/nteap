export interface FormData {
    university: string;
    faculty: string;
    department: string;
    levelOfStudy: string;
    country: string;
    state: string;
    city: string;
    streetAddress: string;
}

export interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
}

export interface AcademicDetailsStepProps {
    formData: FormData;
    errors: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isMobile: boolean;
    onContinue: () => void;
}

export interface LocationStepProps {
    formData: FormData;
    errors: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isMobile: boolean;
    onContinue: () => void;
}

export interface ProfileStepProps {
    selectedInterests: string[];
    interestError: string;
    toggleInterest: (interest: string) => void;
    isMobile: boolean;
    loading: boolean;
    onComplete: () => void;
    children?: React.ReactNode;
} 