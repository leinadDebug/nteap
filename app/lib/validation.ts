export function validateStep(step: number, formData: any, selectedInterests: string[]) {
    const newErrors: any = {};
    let interestError = "";
    if (step === 1) {
        if (!formData.university.trim()) newErrors.university = "University is required";
        if (!formData.faculty.trim()) newErrors.faculty = "Faculty is required";
        if (!formData.department.trim()) newErrors.department = "Department is required";
        if (!formData.levelOfStudy.trim()) newErrors.levelOfStudy = "Level of study is required";
    }
    if (step === 2) {
        if (!formData.country.trim()) newErrors.country = "Country is required";
        if (!formData.state.trim()) newErrors.state = "State is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.streetAddress.trim()) newErrors.streetAddress = "Street address is required";
    }
    if (step === 3) {
        if (selectedInterests.length === 0) interestError = "Please select at least one interest";
    }
    return { errors: newErrors, interestError };
}

export function validateLogin(formData: { email: string; password: string }) {
    const errors: { email?: string; password?: string } = {};
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) errors.email = "Invalid email address";
    if (!formData.password) errors.password = "Password is required";
    return errors;
} 