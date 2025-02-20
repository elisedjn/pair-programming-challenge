import { useEffect, useState } from 'react';
import useDebounce from 'components/SearchInput/useDebounce';

import { Policy } from './Policies.model';

import { Header } from 'components/Header';
import { Table } from 'components/Table';
import { SearchInput } from 'components/SearchInput';

export const Policies = () => {
  const [error, setError] = useState<string | undefined>();
  const [policies, setPolicies] = useState<Policy[] | undefined>();
  const [search, setSearch] = useState<string>('');

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const fetchPolicies = async () => {
      await fetch(`http://localhost:4000/policies?search=${debouncedSearch}`)
        .then((r) => r.json())
        .then((data) => setPolicies(data))
        .catch((e) => setError(e.message));
    };

    fetchPolicies();

    // Component clean-up
    return () => {
      setPolicies([]);
      setError('');
    };
  }, [debouncedSearch]);

  if (!error && !policies) return <p>Loading...</p>;

  if (error)
    return <p className="text-red-500">Error loading policies: {error}</p>;

  return (
    <div>
      <Header>Policies</Header>
      <SearchInput value={search ?? ''} onChange={setSearch} />
      <Table policies={policies} />
    </div>
  );
};
