<template>
  <div class="overflow-x-auto">
    <table class="table w-full border border-primary rounded-lg" style="border-collapse: separate">
      <thead>
        <tr>
          <th>Source</th>
          <th>Package Name</th>
          <th>Scope</th>
          <th>Version</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in results.objects" :key="result.package.name">
          <td><span class="kbd">npmjs</span></td>
          <td><a class="link link-warning" :href="result.package.links.npm">{{
            result.package.name
          }}</a></td>
          <td>{{ result.package.scope }}</td>
          <td>{{ result.package.version }}</td>
          <td>
            <span class="tooltip" :data-tip="result.package.description">{{
              result.package.description.substring(0, 100)
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
