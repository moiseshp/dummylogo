'use client';
// import React from 'react'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Boat } from '@phosphor-icons/react';
// import { Logotype } from '../../(components)/logotype';

export const Login = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="m-10 p-10 rounded-md border w-[90%] flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <Boat />
          <p>dummylogo</p>
        </div>
        <Input />
        <Button>Send</Button>
      </div>
    </div>
  );
};
