import { z } from 'zod';
const gender = ['Male', 'Female', 'Other'] as const;
const userType = ['Client', 'Lawyer'] as const;

export type Gender = (typeof gender)[number];
export const mapGender: { [key in Gender]: string } = {
    Male: 'Male',
    Female: 'Female',
    Other: 'Other',
};

export type UserType = (typeof userType)[number];
export const mapUserType: { [key in UserType]: string } = {
    Client: 'Client',
    Lawyer: 'Lawyer',
}    


export const userSchema = z.object({
    firstName: z.string()
        .min(3, { message: "First name must be at least 3 characters long" })
        .max(30, { message: "First name must be at most 30 characters long" }),

    lastName: z.string()
        .min(3, { message: "Last name must be at least 3 characters long" })
        .max(30, { message: "Last name must be at most 30 characters long" }),

    age: z.string()
        .refine((age) => !isNaN(parseInt(age)) && parseInt(age) >= 18 &&  parseInt(age) <= 90, { message: "Age must be between 18 and 90" }),

    gender: z.enum(gender, { errorMap: () => ({ message: 'Please select an option' }) }),

    username: z.string()
        .min(3, { message: 'Username must be at least 3 characters long' })
        .max(30, { message: 'Username must be at most 30 characters long' }),

    userType: z.enum(userType, { errorMap: () => ({ message: 'Please select an user type' }) }),

    email: z.string().email({ message: 'Invalid email address' }),

    password: z.string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .max(30, { message: 'Password must be at most 30 characters long' }),

    confirmPassword: z.string()
        .min(8, { message: 'Password must be at least 8 characters long' }),

}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
});