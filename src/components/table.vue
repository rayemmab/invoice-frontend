<script setup>
defineProps({
  columns: {
    type: Array,
    required: true,
    default: () => [],
  },
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<template>
  <div>
    <table
      class="min-w-full text-sm font-light text-center border border-neutral-500"
    >
      <thead class="font-medium border-b border-neutral-500">
        <tr>
          <th
            scope="col"
            v-for="column in columns"
            :key="column.key"
            class="px-6 py-2 border-r border-neutral-500"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in data"
          :key="i"
          class="border border-neutral-500 lg:border-b"
        >
          <td
            v-for="column in columns"
            :key="column.key"
            :data-label="column.label"
            class="px-6 py-2 border-r whitespace-nowrap border-neutral-500"
          >
            <slot :name="column.key" :row="row">
              {{ row[column.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
    height: 30px;
  }

  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>
