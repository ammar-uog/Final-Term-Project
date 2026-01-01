import React from 'react';

const ContactPage = () => {
    return (
        <div className="py-16 sm:py-24 px-4">
            <div className="max-w-lg mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Get In Touch</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Have a question or want to partner with us? Drop us a line!
                    </p>
                </div>
                <div className="mt-12">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                            <input type="text" name="name" id="name" autoComplete="name" className="input-field" placeholder="Enter your full name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input id="email" name="email" type="email" autoComplete="email" className="input-field" placeholder="Enter your email address" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea id="message" name="message" rows="4" className="input-field resize-none" placeholder="Enter your message"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="btn-primary w-full">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
