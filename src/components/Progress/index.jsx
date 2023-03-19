import React from "react";
import { ProgressList, ProgressText, ProgressTitle } from "./style";

export const Progress = () => {
  return (
    <div>
      <ProgressTitle>Progress</ProgressTitle>
      <ProgressText>
        Display the current progress of an operation flow.
      </ProgressText>
      <ProgressTitle>When To Use</ProgressTitle>
      <ProgressText>
        If it will take a long time to complete an operation, you can use
        Progress to show the current progress and status.
      </ProgressText>
      <ProgressList>
        <li>
          When an operation will interrupt the current interface, or it needs to
          run in the background for more than 2 seconds.
        </li>
        <li>
          When you need to display the completion percentage of an operation.
        </li>
      </ProgressList>
    </div>
  );
};
