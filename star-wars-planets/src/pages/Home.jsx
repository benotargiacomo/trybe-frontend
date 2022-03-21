import React from 'react';
import Table from '../components/Table';
import FilterByName from '../components/FilterByName';
import FilterByNumber from '../components/FilterByNumber';

export default function Home() {
  return (
    <>
      { console.log('Home render') }
      <header>
        <FilterByName />
        <FilterByNumber />
      </header>
      <main>
        <Table />
      </main>
    </>
  );
}
