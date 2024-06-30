import { Table, TableContainer, Tbody, Td, Th, Tr } from "@chakra-ui/react";
import { memo } from "react";

export const SimpleInformation = memo(() => {
  return (
    <TableContainer maxW={1000}>
      <Table
        variant="simple"
        size="lg"
        colorScheme="gray"
        sx={{
          td: {
            color: "gray.600",
            whiteSpace: "normal",
            wordBreak: "break-word",
          },
        }}
      >
        <Tbody>
          <Tr>
            <Th>Full name</Th>
            <Td>Margot Foster</Td>
          </Tr>
          <Tr>
            <Th>Application for</Th>
            <Td>Backend Developer</Td>
          </Tr>
          <Tr>
            <Th>Email address</Th>
            <Td>margotfoster@example.com</Td>
          </Tr>
          <Tr>
            <Th>Salary expectation</Th>
            <Td>$120,000</Td>
          </Tr>
          <Tr>
            <Th>About</Th>
            <Td>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
});
