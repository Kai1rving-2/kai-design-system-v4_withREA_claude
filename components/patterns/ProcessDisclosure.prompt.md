# ProcessDisclosure

Use for a multi-step or asynchronous process whose execution belongs to the product. Pass `status`, a concrete `title`, and any details as children. Keep details under user control even when status changes. On error, explain what failed and provide `onRetry` only when retry is safe. Do not simulate business work inside this component.
