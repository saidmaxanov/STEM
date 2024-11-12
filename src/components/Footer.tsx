import React from 'react';
import { Github, Twitter, Linkedin, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How do I access the resources?",
    answer: "All resources are freely available after creating an account. Simply click on any resource to start learning."
  },
  {
    question: "Can I contribute my own resources?",
    answer: "Yes! Educators and STEM professionals can submit resources for review through the 'Contribute' section."
  },
  {
    question: "Are the resources suitable for all age groups?",
    answer: "Resources are tagged with recommended age groups and difficulty levels to help you find appropriate content."
  }
];

export default function Footer() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Empowering students and educators with quality STEM resources for a better future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Use', 'Contact Us', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-800 pb-4">
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <p className="mt-2 text-gray-400">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 text-gray-400">
          <p>&copy; {new Date().getFullYear()} STEM Education Resources. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}