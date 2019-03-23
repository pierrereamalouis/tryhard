<template>
  <div class="content-box content-box-lg">
    <div class="content-box-header">
      <img :src="imageCup" alt>New League
    </div>
    <div class="content-box-body">
      <v-form v-model="valid">
        <v-container>
          <v-layout>
            <v-flex xs12 md4>
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="League name"
                color="red"
                required
              ></v-text-field>
            </v-flex>

            <v-flex xs12 md4>
              <v-select :seasons="seasons" label="Season" required></v-select>
            </v-flex>

            <v-flex xs12 md4>
              <v-text-field
                v-model="numPoolers"
                :rules="numPoolersRules"
                label="Number Of Poolers"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 md3>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                lazy
                full-width
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="Keepers List Deadline"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      // League Field
      firstname: "",
      lastname: "",
      nameRules: [v => !!v || "Name is required"],
      // Number of Pooler Field
      numPoolers: null,
      numPoolersRules: [v => !!v || "E-mail is required"],
      // Image URL
      imageCup: window.location.origin + "/img/cup.png",
      // Season
      seasons: ["Foo", "Bar", "Fizz", "Buzz"],
      // Date Picker
      date: new Date().toISOString().substr(0, 10),
      modal: false
    };
  },
  methods: {
    getSeasonYears() {
      const date = new Date();
      const firstYear = d.setFullYear(2016);

      this.seasons.push("2016/2017", "2017/2018", "2018/2019");
    }
  },
  mounted() {}
};
</script>