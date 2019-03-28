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
            <v-stepper-content step="1">
              <v-card flat class="mb-5" color="light" height="inherit">
                <v-form v-model="valid" ref="form">
                  <v-container>
                    <v-layout>
                      <v-flex xs12 md3>
                        <v-text-field
                          v-model="leagueName"
                          :rules="nameRules"
                          label="League name"
                          prepend-icon="fas fa-trophy"
                          required
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12 md3>
                        <v-text-field label="Season" :value="season" disabled></v-text-field>
                      </v-flex>

                      <v-flex xs12 md3>
                        <v-text-field
                          v-model="numPoolers"
                          :rules="numPoolersRules"
                          label="Number Of Poolers"
                          prepend-icon="fas fa-users"
                          type="number"
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
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="date"
                              label="Keepers List Deadline"
                              :rules="dateRules"
                              prepend-icon="event"
                              readonly
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="date"
                            scrollable
                            id="datePicker"
                            :min="minDate"
                            :max="maxDate"
                          >
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

              <v-btn :disabled="!valid" color="success" @click="validate">Next</v-btn>
              <!-- <v-btn color="primary" @click="e1 = 2">Continue</v-btn> -->

              <v-btn flat @click="reset">Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card flat class="mb-5" color="light" height="inherit">
                <v-form v-model="valid">
                  <v-container>
                    <v-layout v-for="(textfield, index) in numPoolers" :key="index">
                      <v-flex xs12 md6>
                        <v-text-field
                          v-model="poolerName"
                          :rules="poolerNameRules"
                          :counter="maxCharPoolerName"
                          label="First name"
                          required
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12 md6>
                        <v-select
                          v-model="user"
                          :items="users"
                          label="Users"
                          required
                          :rules="usersRules"
                          @change="userSelection(this.value)"
                        ></v-select>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-form>
              </v-card>

              <v-btn color="secondary darken-1" @click="e1 = 1">Back</v-btn>
              <v-btn color="primary darken-1" @click="e1 = 3">Continue</v-btn>

              <v-btn flat @click="reset">Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card flat class="mb-5" color="light" height="inherit"></v-card>

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
      leagueName: '',
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
      season: '',
      // Date Picker
      date: null,
      minDate: new Date().toISOString().substr(0, 10),
      maxDate: null,
      modal: false,
      dateRules: [v => !!v || 'A Keepers Deadline is required'],
      // Pooler Fields
      poolerName: '',
      poolerNameRules: [
        v => !!v || 'Name is required',
        v =>
          v.length <= this.maxCharPoolerName ||
          'Name must be less than 15 characters'
      ],
      // Users
      user: null,
      usersRules: [v => !!v || 'Selecting a user is required'],
      users: ['prlouis', 'reams90', 'reama92', 'p-rock'],
      maxCharLeagueName: 20,
      maxCharPoolerName: 15,

      // Clear Button
      clr: true,
      // Stepper Element
      e1: 0
    };
  },
  methods: {
    getSeason() {
      const date = new Date();
      const year = date.getFullYear();
      const currentMonth = date.getMonth();
      let yearA, yearB;

      if (currentMonth > 6) {
        yearA = year;
        yearB = year + 1;
      } else {
        yearA = year - 1;
        yearB = year;
      }
      this.maxDate = new Date(`10/15/${yearB}`).toISOString().substr(0, 10);

      return (this.season = `${yearA}/${yearB}`);
    },
    isInteger(input) {
      const num = Number(input);
      return Number.isInteger(num);
    },
    toNumber() {
      return Number(this.numPoolers);
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.e1 = 2;
        console.log(this.numPoolers);
        //this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
      this.e1 = 1;
    },
    // Update user array where user selected is no longer available in the select options
    userSelection(userSelected) {
      console.log(this.user);
      this.users = this.users.filter(user => user !== userSelected);
    }
  },
  mounted() {
    this.getSeason();
  }
};
</script>

<style scoped>
#vApp {
  background-color: #fff;
}

#newLeagueForm {
  height: 100%;
}

#datePicker {
  height: 500px;
}
</style>

