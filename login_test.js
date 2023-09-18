import { Selector, t } from 'testcafe';

fixture('SDLMS Login').page('https://sdlms.com/login');

test('Valid Login', async () => {
    await t
        .typeText(Selector('#username'), 'your_username')
        .typeText(Selector('#password'), 'your_password')
        .click(Selector('#login-button'))
        .expect(Selector('#dashboard').exists).ok();
});

test('Invalid Login', async () => {
    await t
        .typeText(Selector('#username'), 'invalid_username')
        .typeText(Selector('#password'), 'invalid_password')
        .click(Selector('#login-button'))
        .expect(Selector('.error-message').exists).ok();
});