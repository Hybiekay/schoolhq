import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
type CustomerAccount = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    termsAccepted: boolean;
};

type SchoolAdmin = {
    name: string;
    email: string;
    phone: string;
};

type SchoolInfo = {
    name: string;
    subdomain: string;
    country: string;
    state: string;
    city: string;
    address: string;
    schoolEmail: string;
    schoolPhone: string;
    principalName: string;
    principalEmail: string;
    principalPhone: string;
};

// Animation variants
const cardVariants = {
    hidden: {
        opacity: 0,
        x: 50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        x: -50,
        transition: {
            duration: 0.3
        }
    }
};

const SchoolRegistration = () => {
    // Form steps state
    const [currentStep, setCurrentStep] = useState(0);

    // Customer account form (for purchasing/subscribing)
    const { data: customerData, setData: setCustomerData, post: registerCustomer, processing: customerProcessing, errors: customerErrors } = useForm<CustomerAccount>({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false
    });

    // School admin form (for school admin access)
    const { data: adminData, setData: setAdminData, errors: adminErrors } = useForm<SchoolAdmin>({
        name: '',
        email: '',
        phone: ''
    });

    // School information form
    const { data: schoolData, setData: setSchoolData, errors: schoolErrors } = useForm<SchoolInfo>({
        name: '',
        subdomain: '',
        country: '',
        state: '',
        city: '',
        address: '',
        schoolEmail: '',
        schoolPhone: '',
        principalName: '',
        principalEmail: '',
        principalPhone: ''
    });

    const [availableSubdomains, setAvailableSubdomains] = useState<string[]>([]);
    const [hasAccount, setHasAccount] = useState<boolean | null>(null);

    // Generate subdomain suggestions
    React.useEffect(() => {
        if (schoolData.name.trim()) {
            const generatedSubdomain = schoolData.name
                .toLowerCase()
                .replace(/[^\w\s]/gi, '')
                .replace(/\s+/g, '-')
                .substring(0, 30);

            setSchoolData('subdomain', generatedSubdomain);
            setAvailableSubdomains([
                generatedSubdomain,
                `${generatedSubdomain}-school`,
                `${generatedSubdomain}-academy`
            ]);
        }
    }, [schoolData.name]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const payload = {
            customer: customerData,
            school: schoolData,
            admin: adminData
        };
        registerCustomer('/schools/register',);
    };

    const nextStep = () => {
        setCurrentStep(prev => Math.min(prev + 1, 3));
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 0));
    };

    const steps = [
        {
            title: "Your Account Information",
            description: "Create your customer account to manage your subscription",
            content: (
                <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                            id="fullName"
                            value={customerData.fullName}
                            onChange={(e) => setCustomerData('fullName', e.target.value)}
                        />
                        {customerErrors.fullName && <p className="text-sm text-destructive">{customerErrors.fullName}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                            id="email"
                            type="email"
                            value={customerData.email}
                            onChange={(e) => setCustomerData('email', e.target.value)}
                        />
                        {customerErrors.email && <p className="text-sm text-destructive">{customerErrors.email}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password *</Label>
                        <Input
                            id="password"
                            type="password"
                            value={customerData.password}
                            onChange={(e) => setCustomerData('password', e.target.value)}
                        />
                        {customerErrors.password && <p className="text-sm text-destructive">{customerErrors.password}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password *</Label>
                        <Input
                            id="confirmPassword"
                            type="password"
                            value={customerData.confirmPassword}
                            onChange={(e) => setCustomerData('confirmPassword', e.target.value)}
                        />
                        {customerErrors.confirmPassword && <p className="text-sm text-destructive">{customerErrors.confirmPassword}</p>}
                    </div>
                </div>
            )
        },
        {
            title: "School Information",
            description: "Tell us about your school",
            content: (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="schoolName">School Name *</Label>
                            <Input
                                id="schoolName"
                                value={schoolData.name}
                                onChange={(e) => setSchoolData('name', e.target.value)}
                                placeholder="Enter your school name"
                            />
                            {schoolErrors.name && <p className="text-sm text-destructive">{schoolErrors.name}</p>}
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="subdomain">School Subdomain *</Label>
                            <div className="flex">
                                <Input
                                    id="subdomain"
                                    value={schoolData.subdomain}
                                    onChange={(e) => setSchoolData('subdomain', e.target.value)}
                                    className="rounded-r-none"
                                    placeholder="your-school"
                                />
                                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 bg-muted text-muted-foreground text-sm">
                                    .schoolhq.ng
                                </span>
                            </div>
                            {schoolErrors.subdomain && <p className="text-sm text-destructive">{schoolErrors.subdomain}</p>}

                            {availableSubdomains.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {availableSubdomains.map((subdomain) => (
                                        <Button
                                            key={subdomain}
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setSchoolData('subdomain', subdomain)}
                                            className="text-xs h-8"
                                        >
                                            {subdomain}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="country">Country *</Label>
                            <Select
                                value={schoolData.country}
                                onValueChange={(value) => setSchoolData('country', value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Nigeria">Nigeria</SelectItem>
                                    <SelectItem value="Ghana">Ghana</SelectItem>
                                    <SelectItem value="Kenya">Kenya</SelectItem>
                                    <SelectItem value="South Africa">South Africa</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            {schoolErrors.country && <p className="text-sm text-destructive">{schoolErrors.country}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="state">State/Region</Label>
                            <Input
                                id="state"
                                value={schoolData.state}
                                onChange={(e) => setSchoolData('state', e.target.value)}
                            />
                            {schoolErrors.state && <p className="text-sm text-destructive">{schoolErrors.state}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input
                                id="city"
                                value={schoolData.city}
                                onChange={(e) => setSchoolData('city', e.target.value)}
                            />
                            {schoolErrors.city && <p className="text-sm text-destructive">{schoolErrors.city}</p>}
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="address">Address</Label>
                            <Input
                                id="address"
                                value={schoolData.address}
                                onChange={(e) => setSchoolData('address', e.target.value)}
                            />
                            {schoolErrors.address && <p className="text-sm text-destructive">{schoolErrors.address}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="schoolEmail">School Email *</Label>
                            <Input
                                id="schoolEmail"
                                type="email"
                                value={schoolData.schoolEmail}
                                onChange={(e) => setSchoolData('schoolEmail', e.target.value)}
                            />
                            {schoolErrors.schoolEmail && <p className="text-sm text-destructive">{schoolErrors.schoolEmail}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="schoolPhone">School Phone</Label>
                            <Input
                                id="schoolPhone"
                                type="tel"
                                value={schoolData.schoolPhone}
                                onChange={(e) => setSchoolData('schoolPhone', e.target.value)}
                            />
                            {schoolErrors.schoolPhone && <p className="text-sm text-destructive">{schoolErrors.schoolPhone}</p>}
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "School Administrator",
            description: "Who will manage this school?",
            content: (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="adminName">Admin Name *</Label>
                        <Input
                            id="adminName"
                            value={adminData.name}
                            onChange={(e) => setAdminData('name', e.target.value)}
                        />
                        {adminErrors.name && <p className="text-sm text-destructive">{adminErrors.name}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="adminEmail">Admin Email *</Label>
                        <Input
                            id="adminEmail"
                            type="email"
                            value={adminData.email}
                            onChange={(e) => setAdminData('email', e.target.value)}
                        />
                        {adminErrors.email && <p className="text-sm text-destructive">{adminErrors.email}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="adminPhone">Admin Phone</Label>
                        <Input
                            id="adminPhone"
                            type="tel"
                            value={adminData.phone}
                            onChange={(e) => setAdminData('phone', e.target.value)}
                        />
                        {adminErrors.phone && <p className="text-sm text-destructive">{adminErrors.phone}</p>}
                    </div>
                </div>
            )
        },
        {
            title: "Principal Information",
            description: "Who is the principal of this school?",
            content: (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="principalName">Principal Name *</Label>
                        <Input
                            id="principalName"
                            value={schoolData.principalName}
                            onChange={(e) => setSchoolData('principalName', e.target.value)}
                        />
                        {schoolErrors.principalName && <p className="text-sm text-destructive">{schoolErrors.principalName}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="principalEmail">Principal Email *</Label>
                        <Input
                            id="principalEmail"
                            type="email"
                            value={schoolData.principalEmail}
                            onChange={(e) => setSchoolData('principalEmail', e.target.value)}
                        />
                        {schoolErrors.principalEmail && <p className="text-sm text-destructive">{schoolErrors.principalEmail}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="principalPhone">Principal Phone</Label>
                        <Input
                            id="principalPhone"
                            type="tel"
                            value={schoolData.principalPhone}
                            onChange={(e) => setSchoolData('principalPhone', e.target.value)}
                        />
                        {schoolErrors.principalPhone && <p className="text-sm text-destructive">{schoolErrors.principalPhone}</p>}
                    </div>
                </div>
            )
        },
        {
            title: "Review & Complete",
            description: "Verify all information before submitting",
            content: (
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Your Account</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-muted-foreground">Full Name</p>
                                <p>{customerData.fullName}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Email</p>
                                <p>{customerData.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">School Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-muted-foreground">School Name</p>
                                <p>{schoolData.name}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Subdomain</p>
                                <p>{schoolData.subdomain}.schoolhq.ng</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Location</p>
                                <p>{[schoolData.city, schoolData.state, schoolData.country].filter(Boolean).join(', ')}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Address</p>
                                <p>{schoolData.address || 'Not provided'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">School Administrator</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-muted-foreground">Name</p>
                                <p>{adminData.name}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Email</p>
                                <p>{adminData.email}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Phone</p>
                                <p>{adminData.phone || 'Not provided'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Principal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-muted-foreground">Name</p>
                                <p>{schoolData.principalName}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Email</p>
                                <p>{schoolData.principalEmail}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Phone</p>
                                <p>{schoolData.principalPhone || 'Not provided'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 pt-4">
                        <Checkbox
                            id="termsAccepted"
                            checked={customerData.termsAccepted}
                            onCheckedChange={(checked) => setCustomerData('termsAccepted', Boolean(checked))}
                        />
                        <div className="space-y-1">
                            <Label htmlFor="termsAccepted">
                                I agree to the{' '}
                                <a href="#" className="text-primary hover:underline">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="#" className="text-primary hover:underline">
                                    Privacy Policy
                                </a>{' '}
                                *
                            </Label>
                            {customerErrors.termsAccepted && <p className="text-sm text-destructive">{customerErrors.termsAccepted}</p>}
                        </div>
                    </div>
                </div>
            )
        }
    ];

    // If hasn't selected account option yet
    if (hasAccount === null) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center space-y-2 mb-8"
                    >
                        <h1 className="text-3xl font-bold text-foreground">Welcome to SchoolHQ</h1>
                        <p className="text-lg text-muted-foreground">
                            Register your school or manage existing schools
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card>
                            <CardHeader className="border-b bg-muted/50">
                                <CardTitle className="text-xl">Do you have an account?</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                <div className="space-y-4">
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        onClick={() => setHasAccount(true)}
                                    >
                                        Yes, I have an account
                                    </Button>
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        variant="outline"
                                        onClick={() => {
                                            setHasAccount(false);
                                            setCurrentStep(0);
                                        }}
                                    >
                                        No, I need to create one
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        );
    }

    // If has account, show login form
    if (hasAccount) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center space-y-2 mb-8"
                    >
                        <h1 className="text-3xl font-bold text-foreground">Login to Your Account</h1>
                        <p className="text-lg text-muted-foreground">
                            Continue to register your school
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card>
                            <CardHeader className="border-b bg-muted/50">
                                <CardTitle className="text-xl">Enter your credentials</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    // Handle login logic
                                    // On success, redirect to school creation
                                    setHasAccount(false);
                                    setCurrentStep(1); // Skip account creation, go straight to school info
                                }} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password *</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="••••••••"
                                        />
                                    </div>

                                    <div className="flex justify-between items-center pt-4">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            onClick={() => setHasAccount(null)}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            type="submit"
                                        >
                                            Login
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        );
    }

    // Registration flow for new accounts
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-2"
                >
                    <h1 className="text-3xl font-bold text-foreground">Register Your School</h1>
                    <p className="text-lg text-muted-foreground">
                        {steps[currentStep].description}
                    </p>
                </motion.div>

                {/* Progress indicator */}
                <div className="flex justify-center">
                    <div className="flex space-x-2">
                        {steps.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 w-8 rounded-full ${currentStep >= index ? 'bg-primary' : 'bg-muted'}`}
                            />
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Card className="overflow-hidden">
                            <CardHeader className="border-b bg-muted/50">
                                <CardTitle className="text-xl">{steps[currentStep].title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                {steps[currentStep].content}
                            </CardContent>
                        </Card>
                    </motion.div>
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-between"
                >
                    <Button
                        type="button"
                        variant={currentStep === 0 ? "ghost" : "outline"}
                        onClick={() => currentStep === 0 ? setHasAccount(null) : prevStep()}
                    >
                        {currentStep === 0 ? 'Back' : 'Previous'}
                    </Button>

                    {currentStep < steps.length - 1 ? (
                        <Button
                            type="button"
                            onClick={nextStep}
                        >
                            Next
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={customerProcessing || !customerData.termsAccepted}
                        >
                            {customerProcessing ? 'Processing...' : 'Complete Registration'}
                        </Button>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default SchoolRegistration;