<template>
  <div class="overflow-x-auto border border-success rounded-lg" style="border-collapse: separate;">
    <table class="table table-normal hover w-full rounded-lg">
      <thead>
        <tr>
          <th></th>
          <th>Source</th>
          <th>Package Name</th>
          <th>Scope</th>
          <th>Version</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(result, index) in results.objects" :key="index">
          <td>{{ index + 1 }}</td>
          <td><span class="kbd">npmjs</span></td>
          <td><a class="link link-warning" :href="result.package.links.npm">{{
            result.package.name
          }}</a></td>
          <td>{{ result.package.scope }}</td>
          <td>{{ result.package.version }}</td>
          <td class="whitespace-normal">
            <span class="tooltip" :data-tip="result.package.description">{{
              result.package.description
            }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>

export default {
  props: {
    results: {
      type: Object,
      required: true
    }

  }
};
</script>

<style>
table>tbody>tr>td:first-child {
  position: sticky;
  position: -webkit-sticky;
  left: 0px;
  z-index: 11;
}
</style>
