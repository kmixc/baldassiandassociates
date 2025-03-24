import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        to_email: 'oliver.kmixc@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-serif mb-8 text-gray-900">Contact</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">FIRST NAME *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`mt-1 block w-full border-b ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500 focus:outline-none`}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">LAST NAME *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`mt-1 block w-full border-b ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500 focus:outline-none`}
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">EMAIL *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500 focus:outline-none`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">PHONE NUMBER *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 block w-full border-b ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500 focus:outline-none`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">YOUR MESSAGE</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full border-b border-gray-300 focus:border-gray-500 focus:outline-none resize-none"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex items-center px-6 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white
              ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
          >
            {isSubmitting ? 'Sending...' : 'Submit Message →'}
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-600 text-sm">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 text-sm">Failed to send message. Please try again.</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;