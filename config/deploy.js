module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'reviews-to-go',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
