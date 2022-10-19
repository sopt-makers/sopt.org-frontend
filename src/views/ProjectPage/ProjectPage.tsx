import { useEffect, useReducer } from 'react';
import { to } from 'await-to-js';

import Header from '@src/components/common/Header';
import { Condition } from '@src/lib';

import { reducer } from './reducer';
import { getProjectList } from './mock';
import { ProjectType } from './types';

function Projects() {
  const [state, dispatch] = useReducer(reducer, { _TAG: 'IDLE' });
  const fetchProjectList = async () => {
    dispatch({
      _TAG: 'FETCH',
    });

    const [error, response] = await to(getProjectList());

    if (error) {
      return dispatch({
        _TAG: 'FAILED',
        error,
      });
    }

    if (response) {
      return dispatch({ _TAG: 'SUCCESS', data: response });
    }
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  return (
    <>
      <Header />
      <div>
        <section>
          {(() => {
            switch (state._TAG) {
              case 'IDLE':
                return <p>IDLE</p>;
              case 'LOADING':
                return <p>LOADING</p>;
              case 'ERROR':
                return <p>ERROR</p>;
              case 'OK':
                return <ProjectList list={state.data} />;
            }
          })()}
        </section>
      </div>
    </>
  );
}

function ProjectList({ list }: { list: ProjectType[] }) {
  const listLength = list.length;

  return (
    <div>
      <Condition statement={listLength > 0}>
        {list?.map((project, index) => (
          <article key={index}>{project.name}</article>
        ))}
      </Condition>
      <Condition statement={listLength === 0}>
        <p>Project Empty</p>
      </Condition>
    </div>
  );
}

export default Projects;
