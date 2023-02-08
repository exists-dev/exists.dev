<template>
    <div class="md:container md:mx-auto neutral-focus">
        <div class="w-full rounded-lg px-8 pt-6 pb-8 mb-4">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>

                <!--             <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs"
                v-model="query" @input="debouncedFetchData" /> -->
                <input type="text" id="table-search"
                    class="input input-bordered input-primary w-full block pl-10 p-2.5 focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                    placeholder="Search for packages" v-model="query" @input="debouncedFetchData">
            </div>
        </div>
        <Table :results="results" />
    </div>
</template>

<script lang="ts">
import { debounce } from 'lodash';
import { ref } from 'vue';
import { NpmRegistry } from '~/services/npm';

export default {
    async setup() {
        let query = ''
        const results = ref([]);
        const npmRegistry = new NpmRegistry();

        async function handleSearch(event: Object) {
            const query = event.target?.value
            if (!query) {
                results.value = await npmRegistry.search('exists');
            } else {
                results.value = await npmRegistry.search(encodeURI(query));
            }
        }

        const debouncedFetchData = debounce(handleSearch, 250)

        debouncedFetchData({ target: 'exists' })

        return {
            query,
            results,
            debouncedFetchData
        };
    }
};
</script>
