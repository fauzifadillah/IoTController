return (


  <View>
      <Text style={ styles.textWithShadow }> Relay Controller</Text>
      <Text style={{ fontSize: 14, margintop: 10, color: 'black', textAlign: 'center'}}> Relay 1 </Text>
      <Switch
        style={{ marginLeft: 130, marginBottom: 15 }}
        onValueChange={this.toggleSwitch_1}
        value={this.state.switchValue_1}
      />
      <Switch
        style={{ marginLeft: 130, marginBottom: 15 }}
        onValueChange={this.toggleSwitch_2}
        value={this.state.switchValue_2}
      />

      <Button
        onPress={this.onButtonPress}
        title="Relay 8"
        color="blue"
      />
  </View>
);
<Button
  onPress={this.onButtonPress}
  title="Relay 8"
  color="blue"
/>
