import React from 'react';
import { AuthForm } from '../components/ui/premium-auth';

const AuthPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-4" style={{ paddingTop: '100px' }}>
            <div className="w-full max-w-md">
                <AuthForm />
            </div>
        </div>
    );
};

export default AuthPage;


