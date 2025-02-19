import { motion } from 'framer-motion';
import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700/50"
    >
      <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
      <p className="text-gray-400 mb-6">
        Get the latest articles and insights straight to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-dark-900/50 rounded-lg border border-dark-700/50 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            status === 'loading'
              ? 'bg-primary-500/50 cursor-wait'
              : status === 'success'
              ? 'bg-green-500'
              : 'bg-primary-500 hover:bg-primary-600'
          }`}
          disabled={status !== 'idle'}
        >
          {status === 'loading' ? 'Subscribing...' : 
           status === 'success' ? 'Subscribed!' : 
           'Subscribe'}
        </motion.button>
      </form>
    </motion.div>
  );
}

export default Newsletter; 