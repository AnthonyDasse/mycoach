<template>
  <div>
  <b-button block size="sm" v-b-modal="'modal-'+week">{{$t('session.openModalButton')}}</b-button>

  <b-modal v-bind:id="'modal-'+week" v-bind:title="this.$t('session.createTitle')+ week" 
  size="xl" ok-title="Done" cancel-title="Back"  >
  <div>
    <b-form @submit="onSubmit" @reset="onReset">        

        <b-form-group id="input-date" v-bind:label="this.$t('session.formLabelDate')" label-for="input-date" >
            <b-form-input id="input-date" v-model="form.date" type="date" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-time" v-bind:label="this.$t('session.formLabelTime')"  label-for="input-time" >
            <b-form-input id="input-time" v-model="form.time" type="datetime-local" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-name" v-bind:label="this.$t('session.formLabelName')"  label-for="input-name" >
            <b-form-input id="input-name" v-model="form.name" placeholder="Jane Doe" type="text" maxlength="50" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-type" v-bind:label="this.$t('session.formLabelType')"  label-for="input-type" >
            <b-form-input id="input-type" v-model="form.type" placeholder="fractionné" type="text" maxlength="50" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-duration" v-bind:label="this.$t('session.formLabelDuration')"   v-bind:description="this.$t('session.fromDescriptionDuration') " label-for="input-duration" >
            <b-form-input id="input-duration" v-model="form.duration" pattern="[0-9]{2}[:][0-9]{2}[:][0-9]{2}" placeholder="00:45:00" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-distance" v-bind:label="this.$t('session.formLabelDistance')"  v-bind:description="this.$t('session.formDescriptionDistance') " label-for="input-distance" >
            <b-form-input id="input-distance" v-model="form.distance" placeholder="12" type="text" pattern="^[0-9]+[.][0-9]*" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-elevation" v-bind:label="this.$t('session.formLabelElevation')"  label-for="input-elevation" >
            <b-form-input id="input-elevation" v-model="form.elevation" type="number" min="0" placeholder="120"></b-form-input>
        </b-form-group>

        <b-form-group id="input-circuit" v-bind:label="this.$t('session.formLabelCircuit')" label-for="input-circuit" >
            <b-form-input id="input-circuit" v-model="form.circuit" type="text" maxlength="50" placeholder="circuit du boel"></b-form-input>
        </b-form-group>
        
        <b-form-group id="input-details" v-bind:label="this.$t('session.formLabelDetails')" label-for="input-details" >
            <b-form-input id="input-details" v-model="form.details" type="text" maxlength="500" placeholder="tranquille dans les côtes"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">{{$t('session.formSubmitButton')}}</b-button>
        <b-button type="reset" variant="danger">{{$t('session.formResetButton')}}</b-button>
        
    </b-form>
  </div>
    <template v-slot:modal-footer="">
            {{$t('session.createModalFooterText')}}
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
            time: "00:00:00",
            name : "",
            type : "",
            distance : "0.00",
            duration : "00:00:00",
            elevation : 0,
            circuit : "",
            details : ""
        }
      }
    },
    methods : {
    onSubmit(evt) {
        evt.preventDefault();        
        let newSession = {... this.form};
        this.$store.commit('plans/addSession', { weekId : this.week, session: newSession });       
      },
      onReset(evt) {
        evt.preventDefault()
            this.form.date =  "";
            this.form.time= "00:00:00";
             this.form.name = "";
             this.form.type = "";
             this.form.distance = "0.00";
             this.form.duration = "00:00:00";
             this.form.elevation = 0;
             this.form.circuit = "";
             this.form.details = "";
      }
    }
}
</script>

<style>

</style>