# dev-ops-learnings

### Commands

To start minikube cluster

```
minikube start
```

View Minikube Dashboard

```
minikube dashboard
```

Stop minikube cluster

```
minikube stop
```

Delete minikube cluster

```
minikube delete
```

Apply kubernetes file

```
kubectl apply -f <file-name.yaml>
```

List the pods

```
kubectl get pods
```

List the deployments

```
kubectl get deployments
```

List the services

```
kubectl get svc
```

View logs of a pod

```
kubectl logs -f <pod-name>
```

Delete pod

```
kubectl delete pod <pod-name>
```

Describe details of a pod/svc/deployment

```
kubectl describe <pod/svc/deployment> <pod/svc/deployment-name>
```
