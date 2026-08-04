export function getErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return 'Terjadi kesalahan yang tidak diketahui.';
}
