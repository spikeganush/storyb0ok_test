import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  //Image optimization
  images: {
    domains: ['vision2033.acu.edu.au']
  }
};
export default MillionLint.next({
  rsc: true
})(nextConfig);