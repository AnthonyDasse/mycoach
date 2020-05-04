<template>
  <div>
  <b-button v-b-modal="'modal-'+week">Add session</b-button>

  <b-modal v-bind:id="'modal-'+week" v-bind:title="'Add session to Week '+ week" size="xl">
  <div>
    <b-form @submit="onSubmit" @reset="onReset">        

        <b-form-group id="input-date" label="Date:" label-for="input-date" >
            <b-form-input id="input-date" v-model="form.date" placeholder="2019-02-06T09:00:00.000Z"></b-form-input>
        </b-form-group>

        <b-form-group id="input-name" label="Name :" label-for="input-name" >
            <b-form-input id="input-name" v-model="form.name" placeholder="Jane Doe"></b-form-input>
        </b-form-group>

        <b-form-group id="input-type" label="Type:" label-for="input-type" >
            <b-form-input id="input-type" v-model="form.type" placeholder="fractionné"></b-form-input>
        </b-form-group>

        <b-form-group id="input-time" label="Time:" label-for="input-time" >
            <b-form-input id="input-time" v-model="form.time" placeholder="00:45:00"></b-form-input>
        </b-form-group>

        <b-form-group id="input-distance" label="Distance:" label-for="input-distance" >
            <b-form-input id="input-distance" v-model="form.distance" placeholder="12"></b-form-input>
        </b-form-group>

        <b-form-group id="input-heightDifference" label="heightDifference:" label-for="input-heightDifference" >
            <b-form-input id="input-heightDifference" v-model="form.heightDifference" placeholder="120"></b-form-input>
        </b-form-group>

        <b-form-group id="input-circuit" label="Circuit:" label-for="input-circuit" >
            <b-form-input id="input-circuit" v-model="form.circuit" placeholder="circuit du boel"></b-form-input>
        </b-form-group>
        
        <b-form-group id="input-details" label="Details:" label-for="input-details" >
            <b-form-input id="input-details" v-model="form.details" placeholder="tranquille dans les côtes"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
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
        evt.preventDefault()
        this.$emit('newSession', this.form);
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