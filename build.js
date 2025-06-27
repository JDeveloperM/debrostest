#!/usr/bin/env node

// Simple build script for Arweave compatibility
process.env.NEXT_TELEMETRY_DISABLED = '1';
process.env.NODE_OPTIONS = '--max-old-space-size=4096';

const { spawn } = require('child_process');

console.log('Starting Arweave-compatible build...');

const build = spawn('npx', ['next', 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NEXT_TELEMETRY_DISABLED: '1',
    NODE_OPTIONS: '--max-old-space-size=4096',
    DISABLE_ESLINT_PLUGIN: 'true'
  }
});

build.on('close', (code) => {
  if (code === 0) {
    console.log('Build completed successfully!');
  } else {
    console.error(`Build failed with code ${code}`);
    process.exit(code);
  }
});
