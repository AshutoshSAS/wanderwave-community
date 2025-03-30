
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Mail, ArrowLeft } from 'lucide-react';

const VerifyEmail = () => {
  return (
    <Card className="w-full shadow-lg border-0">
      <CardHeader className="space-y-2 text-center">
        <div className="w-12 h-12 mx-auto bg-gradient-to-r from-teal-400 to-ocean-400 rounded-full flex items-center justify-center">
          <Mail className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold">Check Your Email</CardTitle>
        <CardDescription>
          We've sent you a verification link. Please check your email and click the link to verify your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p className="text-sm">
            If you don't see the email in your inbox, please check your spam folder or request a new verification link.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center border-t p-4">
        <Link to="/auth/sign-in" className="flex items-center text-ocean-600 hover:underline font-medium">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to sign in
        </Link>
      </CardFooter>
    </Card>
  );
};

export default VerifyEmail;
