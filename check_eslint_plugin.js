import reactHooks from 'eslint-plugin-react-hooks';
if (reactHooks.configs) {
    console.log('Configs keys:', Object.keys(reactHooks.configs));
    if (reactHooks.configs.flat) {
        console.log('Configs.flat keys:', Object.keys(reactHooks.configs.flat));
    } else {
        console.log('Configs.flat is undefined');
    }
} else {
    console.log('reactHooks.configs is undefined');
}
