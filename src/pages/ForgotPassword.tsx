
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { resetPassword, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await resetPassword(email);
  };

  return (
    <Card className="w-full shadow-lg border-0">
      <CardHeader className="space-y-2 text-center">
        <div className="w-12 h-12 mx-auto bg-gradient-to-r from-teal-400 to-ocean-400 rounded-full flex items-center justify-center">
          <MapPin className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
        <CardDescription>
          Enter your email address below and we'll send you a password reset link
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-ocean-500 hover:from-teal-600 hover:to-ocean-600" disabled={loading}>
            {loading ? 'Sending reset link...' : 'Send Reset Link'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center border-t p-4">
        <Link to="/auth/sign-in" className="flex items-center text-ocean-600 hover:underline font-medium">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to sign in
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ForgotPassword;
