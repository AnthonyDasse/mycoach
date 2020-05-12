<template>
<div>
    <b-button size="sm"  v-b-modal.modal-edit>{{$t('training.updatePlan')}}</b-button>

    <b-modal id="modal-edit" v-bind:title="this.$t('training.editTitle')" 
        size="xl" ok-title="Done" cancel-title="Back"  >
        <div>
            <b-form @reset="onReset" @submit="onSubmit">

                <b-form-group id="input-name" v-bind:label="this.$t('session.formLabelName')"  label-for="input-name" >
                    <b-form-input id="input-name" v-model="form.name" placeholder="" type="text" maxlength="50" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-date" v-bind:label="this.$t('session.formLabelDate')" label-for="input-date" >
                    <b-form-input id="input-date" v-model="form.competition.date" type="date" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-compet-name" v-bind:label="this.$t('training.formLabelCompetitionName')"  label-for="input-compet-name" >
                    <b-form-input id="input-compet-name" v-model="form.competition.name" placeholder="" type="text" maxlength="50" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-distance" v-bind:label="this.$t('session.formLabelDistance')"  v-bind:description="this.$t('session.formDescriptionDistance') " label-for="input-distance" >
                    <b-form-input id="input-distance" v-model="form.competition.distance" placeholder="12" type="text" pattern="^[0-9]+[.][0-9]*" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-compet-location" v-bind:label="this.$t('training.formLabelCompetitionLocation')"  label-for="input-compet-location" >
                    <b-form-input id="input-compet-location" v-model="form.competition.location" placeholder="" type="text" maxlength="250" ></b-form-input>
                </b-form-group>


                <b-button type="submit" variant="primary">{{$t('training.formSubmitUpdateButton')}}</b-button>
                <b-button type="reset" variant="danger">{{$t('session.formResetButton')}}</b-button>
                
            </b-form>
        </div>
            <template v-slot:modal-footer="">
                    {{$t('training.editModalFooterText')}}
            </template>
  </b-modal>
  </div>
</template>

<script>
export default {
    props: ["plan"],
    data() {
      return {
        form: {
            name : this.plan.name,
            competition : {
                date : this.plan.competition.date,
                name : this.plan.competition.name,
                distance : this.plan.competition.distance,
                location : this.plan.competition.location
            }
        }
      }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            let newPlan = {... this.plan};
            
            newPlan.name = this.form.name;
            newPlan.competition.date = this.form.competition.date;
            newPlan.competition.name = this.form.competition.name;
            newPlan.competition.distance = this.form.competition.distance;
            newPlan.competition.location = this.form.competition.location
            this.$store.dispatch('plans/updatePlan', { planId : this.plan.id, plan: newPlan });       
            this.$bvModal.hide('modal-edit')
        },
        onReset(evt) {
            evt.preventDefault()
            this.form.name = this.plan.name;
            this.form.competition.date = this.plan.competition.date;
            this.form.competition.name = this.plan.competition.name;
            this.form.competition.distance = this.plan.competition.distance;
            this.form.competition.location = this.plan.competition.location;
        }
    }
}
</script>

<style>

</style>