<template>
  <div>
  <b-button v-b-modal="'modal-'+week">Add sessions</b-button>

  <b-modal v-bind:id="'modal-'+week" v-bind:title="'Add sessions to Week '+ week" 
  size="xl" ok-title="Done" cancel-title="Back"  >
  <div>
    <b-form @submit="onSubmit" @reset="onReset">        

        <b-form-group id="input-date" label="Date:" label-for="input-date" >
            <b-form-input id="input-date" v-model="form.date" type="date" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-time" label="Time:" label-for="input-time" >
            <b-form-input id="input-time" v-model="form.time" type="datetime-local" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-name" label="Name :" label-for="input-name" >
            <b-form-input id="input-name" v-model="form.name" placeholder="Jane Doe" type="text" maxlength="50" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-type" label="Type:" label-for="input-type" >
            <b-form-input id="input-type" v-model="form.type" placeholder="fractionné" type="text" maxlength="50" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-duration" label="Duration:"  description="to format : HH:MM:SS" label-for="input-duration" >
            <b-form-input id="input-duration" v-model="form.duration" pattern="[0-9]{2}[:][0-9]{2}[:][0-9]{2}" placeholder="00:45:00" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-distance" label="Distance:" description="KM 00,0 (ex : 12,4 or 9,0)" label-for="input-distance" >
            <b-form-input id="input-distance" v-model="form.distance" placeholder="12" type="text" pattern="^[0-9]+[,][0-9]*" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-heightDifference" label="Height Difference:" label-for="input-heightDifference" >
            <b-form-input id="input-heightDifference" v-model="form.heightDifference" type="number" min="0" placeholder="120"></b-form-input>
        </b-form-group>

        <b-form-group id="input-circuit" label="Circuit:" label-for="input-circuit" >
            <b-form-input id="input-circuit" v-model="form.circuit" type="text" maxlength="50" placeholder="circuit du boel"></b-form-input>
        </b-form-group>
        
        <b-form-group id="input-details" label="Details:" label-for="input-details" >
            <b-form-input id="input-details" v-model="form.details" type="text" maxlength="500" placeholder="tranquille dans les côtes"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        
    </b-form>
  </div>
    <template v-slot:modal-footer="">
            Add many session on this week
    </template>
  </b-modal>
</div>

</template>

<script>
export default {
    props: {
        week: Number
    },
    data() {
      return {
        form: {
            date : "",
            name : "",
            type : "",
            distance : 0,
            time : "00:00:00",
            heightDifference : 0,
            circuit : "",
            details : ""
        }
      }
    },
    methods : {
    onSubmit(evt) {
        evt.preventDefault();        
        let newSession = {... this.form};

        // eslint-disable-next-line no-console
        console.log('psss', this.form.date);
        this.$store.commit('plans/addSession', { weekId : this.week, session: newSession });       
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        // this.form.email = ''
        // this.form.name = ''
        // this.form.food = null
        // this.form.checked = []
        // // Trick to reset/clear native browser form validation state
        // this.show = false
        // this.$nextTick(() => {
        //   this.show = true
        // })
      }
    }
}
</script>

<style>

</style>