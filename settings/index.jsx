const list = [
  { name: 'English', value: 'English' },
  { name: 'Nederlands', value: 'Nederlands' },
];

/* Main Settings Page */
function renderMainPage() {
  return (
    <Page>
      <Section title="Settings">
        <Select settingsKey="letter" label="Language" options={list} />
        <Slider label="Range" settingsKey="slider" min="0" max="100" />
      </Section>
    </Page>
  );
}

registerSettingsPage((props) => {
  let result = renderMainPage;

  return result(props);
});
