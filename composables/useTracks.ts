export default function () {
  return useState("tracks", () => [
    {
      id: 1,
      src: "/music/Breath.m4a",
      name: "Breath",
      album: "Last Piece",
    },
    {
      id: 2,
      src: "/music/Last Piece.m4a",
      name: "Last Piece",
      album: "Last Piece",
    },
    {
      id: 3,
      src: "/music/One in a Million.m4a",
      name: "One in a Million",
      album: "One in a Million ",
    },
  ]);
}
