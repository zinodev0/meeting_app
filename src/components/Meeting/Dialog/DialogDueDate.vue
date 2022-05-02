<template>
  <v-col cols="12" sm="6" md="4">
    <v-dialog
      ref="dialog"
      :value="true"
      :return-value.sync="date"
      persistent
      width="290px"
    >
      <v-date-picker v-model="date" scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="$emit('close')"> Cancel </v-btn>
        <v-btn text color="primary" @click="saveDate"> OK </v-btn>
      </v-date-picker>
    </v-dialog>
  </v-col>
</template>

<script>
export default {
  name: "DialogDueDate",
  props: ["meeting"],
  data() {
    return {
      date: null,
    };
  },
  methods: {
    saveDate() {
      let payload = {
        id: this.meeting.id,
        dueDate: this.date,
      };
      this.$store.dispatch("updateMeetingDueDate", payload);
      this.$emit("close");
    },
  },
  mounted() {
    if (this.meeting.dueDate) {
      this.date = this.meeting.dueDate;
    }
  },
};
</script>

<style></style>
