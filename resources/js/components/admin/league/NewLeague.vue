<template>
  <div class="content-box content-box-lg">
    <div class="content-box-header">
      <img :src="imageCup" alt>New League
    </div>
    <div class="content-box-body">
      <v-app id="vApp">
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">Create a league</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">Create Poolers</v-stepper-step>

            <v-divider></v-divider>

            <!-- <v-stepper-step step="3">Name of step 3</v-stepper-step> -->
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1" class="vStepper">
              <v-card flat class="mb-5" color="light" height="inherit">
                <v-form v-model="valid">
                  <v-container>
                    <v-layout>
                      <v-flex xs12 md3>
                        <v-text-field
                          v-model="firstname"
                          :rules="nameRules"
                          label="League name"
                          required
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12 md3>
                        <v-select
                          v-model="select"
                          :items="seasons"
                          :rules="[v => !!v || 'Item is required']"
                          label="Season"
                          required
                        ></v-select>
                      </v-flex>

                      <v-flex xs12 md3>
                        <v-text-field
                          v-model="numPoolers"
                          :rules="numPoolersRules"
                          label="Number Of Poolers"
                          required
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12 md3>
                        <v-dialog
                          ref="dialog"
                          v-model="modal"
                          :return-value.sync="date"
                          persistent
                          lazy
                          full-width
                          width="290px"
                          height="450px"
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
              </v-card>

              <v-btn :disabled="!valid" color="success" @click="validateLeague">Next</v-btn>
              <!-- <v-btn color="primary" @click="e1 = 2">Continue</v-btn> -->

              <v-btn flat @click="reset">Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

              <v-btn color="secondary darken-1" @click="e1 = 1">Back</v-btn>
              <v-btn color="primary darken-1" @click="e1 = 3">Continue</v-btn>

              <v-btn flat @click="reset">Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

              <v-btn color="primary" @click="e1 = 1">Continue</v-btn>

              <v-btn flat @click="reset">Cancel</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      // League Field
      firstname: '',
      lastname: '',
      nameRules: [v => !!v || 'Name is required'],
      // Number of Pooler Field
      numPoolers: null,
      numPoolersRules: [
        v => !!v || 'Number of poolers is required',
        v => this.isInteger(v) || 'Input must be an integer'
      ],
      // Image URL
      imageCup: window.location.origin + '/img/cup.png',
      // Season
      select: null,
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
      seasons: ['2016/2017', '2017/2018', '2018/2019'],
      // Date Picker
      date: new Date().toISOString().substr(0, 10),
      modal: false,
      // Clear Button
      clr: true,
      // Stepper Element
      e1: 0
    };
  },
  methods: {
    getSeasonYears() {
      const date = new Date();
      const firstYear = d.setFullYear(2016);

      this.seasons.push('2016/2017', '2017/2018', '2018/2019');
    },
    isInteger(input) {
      const num = Number(input);
      return Number.isInteger(num);
      //console.log(typeof input);
    },
    validateLeague() {
      this.e1 = 2;
      if (this.$refs.form.validate()) {
        //this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
      this.e1 = 1;
    }
  },
  mounted() {
    //this.seasons.push('2016/2017', '2017/2018', '2018/2019');
  }
};
</script>

<style scoped>
#vApp {
  background-color: #fff;
  height: inherit;
}

#newLeagueForm {
  height: 100%;
}

.vStepper {
  border: 1px solid #ddd;
}
</style>

