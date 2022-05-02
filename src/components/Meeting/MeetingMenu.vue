<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="handleClick(i)"
        >
          <v-list-item-icon>
            <v-icon :color="item.color" v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <dialog-due-date
      @close="dialogs.dueDate = false"
      v-if="dialogs.dueDate"
      :meeting="meeting"
    />
    <dialog-edit
      @close="dialogs.edit = false"
      v-if="dialogs.edit"
      :meeting="meeting"
    />
    <dialog-delete
      @close="dialogs.delete = false"
      v-if="dialogs.delete"
      :meeting="meeting"
    />
  </div>
</template>

<script>
import DialogEdit from "@/components/Meeting/Dialog/DialogEdit.vue";
import DialogDelete from "@/components/Meeting/Dialog/DialogDelete.vue";
import DialogDueDate from "@/components/Meeting/Dialog/DialogDueDate.vue";

export default {
  name: "MeetingMenu",
  props: ["meeting"],
  components: {
    DialogEdit,
    DialogDelete,
    DialogDueDate,
  },
  data: () => ({
    dialogs: {
      edit: false,
      dueDate: false,
      delete: false,
    },
    items: [
      {
        title: "Edit",
        icon: "mdi-pencil",
        click() {
          this.dialogs.edit = true;
        },
      },
      {
        title: "Due date",
        icon: "mdi-calendar",
        click() {
          this.dialogs.dueDate = true;
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        color: "red",
        click() {
          this.dialogs.delete = true;
        },
      },
    ],
  }),
  methods: {
    handleClick(i) {
      this.items[i].click.call(this);
    },
  },
};
</script>

<style></style>
