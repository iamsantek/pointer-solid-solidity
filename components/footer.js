import { Box, Center, Stack } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box>
      <Center>
        <Stack>
          <a
            href='https://www.pointer.gg'
            target='_blank'
            rel='noopener noreferrer'
          >
            Developed by Santek.dev using Pointer.gg
          </a>
          <Center><a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world"><img src="https://vercel.com/button" alt="Deploy with Vercel" /></a></Center>
        </Stack>
      </Center>
    </Box>
  )
}