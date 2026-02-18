module.exports = {
    apps: [
        {
            name: 'makesoft-website',
            script: 'npm',
            args: 'start -- -p 7676',
            instances: 'max',
            exec_mode: 'cluster',
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};
