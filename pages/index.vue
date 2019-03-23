<template>
  <section class="section">
    <div class="columns is-mobile">
      <b-table :data="data" :columns="columns"></b-table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Candidates',
  data() {
    return {
      data: [
        {
          id: 1,
          name: 'Ehdokas Esko',
          party: 'Happy funtime party',
          profession: 'Software developer',
          recidency: 'Turku'
        },
        {
          id: 2,
          firstName: 'Ehdokas Eija',
          party: 'Sad badtime party',
          profession: 'Product owner',
          recidency: 'Naantali'
        }
      ],
      columns: [
        {
          field: 'id',
          label: 'Candidate number',
          width: '40',
          numeric: true,
          centered: true
        },
        {
          field: 'name',
          label: 'Name'
        },
        {
          field: 'party',
          label: 'Party'
        },
        {
          field: 'profession',
          label: 'Profession'
        },
        {
          field: 'residency',
          label: 'Residency'
        }
      ]
    }
  }
}
</script>
